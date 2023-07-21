package com.example.fusalmatching.controller;

import com.example.fusalmatching.config.jwt.JwtToken;
import com.example.fusalmatching.dto.TeamDto;
import com.example.fusalmatching.dto.TeamLoginRequestDto;
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

    @PostMapping("/new")
    public void createTeam(@RequestBody TeamDto teamDto) {

        teamService.createTeam(teamDto.getId(),teamDto.getPassword(),teamDto.getTeamName());

    }

    @PostMapping("/login")
    public JwtToken login(@RequestBody TeamLoginRequestDto teamLoginRequestDto) {
        String id = teamLoginRequestDto.getId();
        String password = teamLoginRequestDto.getPassword();

        return teamService.login(id,password);
    }

    @PostMapping("/test")
    public void test() {
        System.out.println("==========================>>>>>>>>>>>>> 인증 성공");
    }



}
