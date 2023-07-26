package com.example.fusalmatching.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeamResponseDto {
    private String id;
    private String teamName;
    private int manner;
    private int skill;

}
