package com.example.fusalmatching.service;

import com.example.fusalmatching.domain.*;
import com.example.fusalmatching.dto.request.MatchingApplyRequestDto;
import com.example.fusalmatching.dto.request.MatchingCreateRequestDto;
import com.example.fusalmatching.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class MatchingService {

    private final TeamRepository teamRepository;
    private final StadiumRepository stadiumRepository;
    private final FieldRepository fieldRepository;
    private final MatchingRecordRepository matchingRecordRepository;
    private final TeamMatchingRepository teamMatchingRepository;

    @Transactional
    public void createMatching(MatchingCreateRequestDto matchingCreateRequestDto){

        Optional<Team> team1 = teamRepository.findById(matchingCreateRequestDto.getTeam());
        Team team = team1.get();

        Optional<Stadium> stadium1 = stadiumRepository.findById(matchingCreateRequestDto.getStadium());
        Stadium stadium = stadium1.get();

        Optional<Field> field1 = fieldRepository.findById(matchingCreateRequestDto.getField());
        Field field = field1.get();


        MatchingRecord matchingRecord = MatchingRecord.of(stadium, field);
        matchingRecord.setAllRental(false);
        if(matchingCreateRequestDto.isAllRental()){
            matchingRecord.setConfirm(true);
        }
        matchingRecordRepository.save(matchingRecord);

        TeamMatching teamMatching = TeamMatching.of(team,matchingRecord);
        teamMatchingRepository.save(teamMatching);
    }


    @Transactional
    public void applyMatching(MatchingApplyRequestDto matchingApplyRequestDto) {
        Optional<Team> team1 = teamRepository.findById(matchingApplyRequestDto.getTeam());
        Team team = team1.get();

        Optional<MatchingRecord> matchingRecord1 = matchingRecordRepository.findById(matchingApplyRequestDto.getMatchingId());
        MatchingRecord matchingRecord = matchingRecord1.get();
        matchingRecord.setConfirm(true);
        matchingRecordRepository.save(matchingRecord);


        TeamMatching teamMatching = TeamMatching.of(team,matchingRecord);
        teamMatchingRepository.save(teamMatching);

    }


}
