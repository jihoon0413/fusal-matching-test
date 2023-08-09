package com.example.fusalmatching.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeamResponseDto {
    private String id;
    private String teamName;
    private String captainName;
    private String tel;
    private String imageUrl;
    private int manner;
    private int skill;
    private List<MatchingRecordDto> matchingRecordList;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MatchingRecordDto {
        private FieldResponseDto field;
    }



}
