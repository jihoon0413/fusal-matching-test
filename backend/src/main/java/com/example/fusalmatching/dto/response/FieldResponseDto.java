package com.example.fusalmatching.dto.response;

import com.example.fusalmatching.domain.Stadium;
import com.example.fusalmatching.domain.Team;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FieldResponseDto {

    private Long id;
    private Stadium stadium;
    private String matchingDate;
    private String startTime;
    private String endTime;
    private Long matchingId;
    private List<TeamDto> team;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class TeamDto {
        private String id;
        private String teamName;
        private int manner;
        private int skill;


    }


}
