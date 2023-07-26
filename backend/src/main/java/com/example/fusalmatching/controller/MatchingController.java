package com.example.fusalmatching.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping("/matching")
@RestController
public class MatchingController {

    @PostMapping("/create")
    public void createMatching() {
        //처음 매칭 신청하는거
        //field, team, stadium,


    }

    @PutMapping("/confirm")
    public void confirmMatching() {
        // 이건 다른사람이 들어가 있는 매칭에 신청하는거
    }



}
