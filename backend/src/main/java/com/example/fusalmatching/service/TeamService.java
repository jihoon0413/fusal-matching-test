package com.example.fusalmatching.service;

import com.example.fusalmatching.config.jwt.JwtToken;
import com.example.fusalmatching.config.jwt.JwtTokenProvider;
import com.example.fusalmatching.domain.Team;
import com.example.fusalmatching.domain.TeamReview;
import com.example.fusalmatching.dto.response.TeamResponseDto;
import com.example.fusalmatching.dto.response.TeamReviewResponseDto;
import com.example.fusalmatching.repository.TeamRepository;
import com.example.fusalmatching.repository.TeamReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    @Transactional
    public void createTeam(String id, String password, String teamName) {

//        String hashedPassword = passwordEncoder.encode(password);           //TODO: 아이디, 닉네임 중복확인 해야함
        Team newTeam = Team.of(id, teamName, password);
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
        dto.setManner(team.getManner());
        dto.setSkill(team.getSkill());
        return dto;
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


}
