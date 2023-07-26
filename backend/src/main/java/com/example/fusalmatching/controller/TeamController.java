package com.example.fusalmatching.controller;

import com.example.fusalmatching.config.jwt.JwtToken;
import com.example.fusalmatching.dto.request.TeamSignDto;
import com.example.fusalmatching.dto.request.TeamLoginRequestDto;
import com.example.fusalmatching.dto.response.TeamResponseDto;
import com.example.fusalmatching.dto.response.TeamReviewResponseDto;
import com.example.fusalmatching.service.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/teams")
@RestController
public class TeamController {

    private final TeamService teamService;

    @GetMapping
    public TeamResponseDto getTeamList(@RequestParam String id) {

        return teamService.getTeam(id);
    }

    @GetMapping("/reviews")
    public List<TeamReviewResponseDto> getReviews(@RequestParam String id) {
        return teamService.getReviewList(id);
    }

    @PostMapping("/new")
    public void createTeam(@RequestBody TeamSignDto teamDto) {

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
