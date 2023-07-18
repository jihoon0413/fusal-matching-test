package com.example.fusalmatching.controller;

import com.example.fusalmatching.dto.TeamDto;
import com.example.fusalmatching.service.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping("/teams")
@RestController
public class TeamController {

    private final TeamService teamService;

    @PostMapping
    public void createTeam(@RequestBody TeamDto teamDto) {

        int id = teamDto.getId();

        teamService.createTeam(teamDto.getId(),teamDto.getPassword(),teamDto.getTeamName());



    }



}
