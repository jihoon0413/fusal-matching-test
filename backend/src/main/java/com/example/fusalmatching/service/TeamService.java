package com.example.fusalmatching.service;

import com.example.fusalmatching.domain.Team;
import com.example.fusalmatching.repository.TeamRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional
public class TeamService {

    private final TeamRepository teamRepository;
    private final PasswordEncoder passwordEncoder;

    public void createTeam(int id, String password, String teamName) {

        String hashedPassword = passwordEncoder.encode(password);

        Team newTeam = Team.of(String.valueOf(id), teamName, hashedPassword);
        System.out.println("********>>>>>>> " + newTeam.toString());
        teamRepository.save(newTeam);

    }


}
