package com.example.fusalmatching.controller;


import com.example.fusalmatching.domain.Stadium;
import com.example.fusalmatching.repository.StadiumRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/stadiums")
@RestController
public class StadiumController {

    private final StadiumRepository stadiumRepository;




}
