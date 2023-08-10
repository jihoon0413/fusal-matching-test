package com.example.fusalmatching.service;

import com.example.fusalmatching.config.jwt.JwtToken;
import com.example.fusalmatching.config.jwt.JwtTokenProvider;
import com.example.fusalmatching.domain.MatchingRecord;
import com.example.fusalmatching.domain.Team;
import com.example.fusalmatching.domain.TeamMatching;
import com.example.fusalmatching.domain.TeamReview;
import com.example.fusalmatching.dto.request.CheckRandomNumDto;
import com.example.fusalmatching.dto.request.CheckRequestDto;
import com.example.fusalmatching.dto.request.TeamSignDto;
import com.example.fusalmatching.dto.response.TeamResponseDto;
import com.example.fusalmatching.dto.response.TeamReviewResponseDto;
import com.example.fusalmatching.repository.MatchingRecordRepository;
import com.example.fusalmatching.repository.TeamMatchingRepository;
import com.example.fusalmatching.repository.TeamRepository;
import com.example.fusalmatching.repository.TeamReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class TeamService {

    private final TeamRepository teamRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;
    private final TeamReviewRepository teamReviewRepository;
    private final TeamMatchingRepository teamMatchingRepository;
    private final MatchingRecordRepository matchingRecordRepository;
    private final StadiumService stadiumService;

    @Transactional
    public void createTeam(TeamSignDto teamSignDto) {

//        String hashedPassword = passwordEncoder.encode(password);           //TODO: 아이디, 닉네임 중복확인 해야함
        Team newTeam = Team.of(teamSignDto.getId(), teamSignDto.getTeamName(), teamSignDto.getPassword(), teamSignDto.getCaptainName(), teamSignDto.getTel(), teamSignDto.getEmail());
        teamRepository.save(newTeam);

    }


    @Transactional
    public JwtToken login(String id, String password) {
        // 1. Login ID/PW 를 기반으로 Authentication 객체 생성
        // 이때 authentication 는 인증 여부를 확인하는 authenticated 값이 false
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(id, password);

        // 2. 실제 검증 (사용자 비밀번호 체크)이 이루어지는 부분
        // authenticate 매서드가 실행될 때 CustomUserDetailsService 에서 만든 loadUserByUsername 메서드가 실행
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        // 검증된 인증 정보로 JWT 토큰 생성

        return jwtTokenProvider.generateToken(authentication, id);

    }

    @Transactional
    public TeamResponseDto getTeam(String id) {
            Optional<Team> collect = teamRepository.findById(id);
            Team team = collect.get();
            return entityToDto(team);

    }

    private TeamResponseDto entityToDto(Team team) {
        var dto = new TeamResponseDto();
        dto.setId(team.getId());
        dto.setTeamName(team.getTeamName());
        dto.setCaptainName(team.getCaptainName());
        dto.setTel(team.getTel());
        dto.setImageUrl(team.getImgUrl());
        dto.setManner(team.getManner());
        dto.setSkill(team.getSkill());
        dto.setMatchingRecordList(getMatchingRecordList(team.getId()));
        return dto;
    }

    @Transactional
    private List<TeamResponseDto.MatchingRecordDto> getMatchingRecordList(String id) {

        List<TeamMatching> teamMatchingList = teamMatchingRepository.findAllByTeam_Id(id);

        List<TeamResponseDto.MatchingRecordDto> matchingRecordDtoList = new ArrayList<>();



        for(int i = 0 ; i < teamMatchingList.size() ; i++) {
            var matchingRecordDto = new TeamResponseDto.MatchingRecordDto();
//            Optional<MatchingRecord> matchingRecord1 = matchingRecordRepository.findById(teamMatchingList.get(i).getMatchingRecord().getId());
//            MatchingRecord  matchingRecord = matchingRecord1.get();
            matchingRecordDto.setField(stadiumService.getFieldResponseDto(teamMatchingList.get(i).getMatchingRecord().getField(), teamMatchingList.get(i).getMatchingRecord().getId()));
            matchingRecordDtoList.add(matchingRecordDto);
        }
        return matchingRecordDtoList;
    }


    @Transactional
    public List<TeamReviewResponseDto> getReviewList(String id) {

        List<TeamReviewResponseDto> collect = teamReviewRepository.findAllByTeamId(id)
                .stream().map(it -> entityToDto(it))
                .collect(Collectors.toList());

        return collect;


    }

    private TeamReviewResponseDto entityToDto(TeamReview teamReview) {
        var dto = new TeamReviewResponseDto();
        dto.setManner(teamReview.getManner());
        dto.setSkill(teamReview.getSkill());
        return dto;
    }

    @Transactional
    public boolean checkId(CheckRequestDto id) {
        return this.teamRepository.findById(id.getIdORNick()).isEmpty();
    }
    
    @Transactional
    public boolean checkName(CheckRequestDto id) {
        return this.teamRepository.findByTeamName(id.getIdORNick()).isEmpty();
    }

    public boolean checkNum(CheckRandomNumDto randomNum) {

        return passwordEncoder.matches(randomNum.getUserWrite(), randomNum.getHashedNum());


    }
}
