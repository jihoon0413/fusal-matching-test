package com.example.fusalmatching.service;

import com.example.fusalmatching.domain.Team;
import com.example.fusalmatching.repository.TeamRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
@Transactional
public class TeamService {

    private final TeamRepository teamRepository;

    public void createTeam(int id, String password, String teamName) {
        System.out.println("....>>>" + id + "//" + password + "//" + teamName);
        Team newTeam = Team.of(String.valueOf(id), password, teamName);
        teamRepository.save(newTeam);

    }


}
