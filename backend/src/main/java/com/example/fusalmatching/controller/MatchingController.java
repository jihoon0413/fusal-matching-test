package com.example.fusalmatching.controller;


import com.example.fusalmatching.dto.request.MatchingApplyRequestDto;
import com.example.fusalmatching.dto.request.MatchingCreateRequestDto;
import com.example.fusalmatching.service.MatchingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RequestMapping("/matching")
@RestController
public class MatchingController {
    private final MatchingService matchingService;

    @PostMapping("/create")
    public void createMatching(@RequestBody MatchingCreateRequestDto matchingCreateRequestDto) {
        matchingService.createMatching(matchingCreateRequestDto);

    }

    @PostMapping("/apply")
    public void applyMatching(@RequestBody MatchingApplyRequestDto matchingApplyRequestDto) {
        matchingService.applyMatching(matchingApplyRequestDto);
    }

    @PutMapping("/confirm")
    public void confirmMatching() {
        // 이건 다른사람이 들어가 있는 매칭에 신청하는거
    }



}
