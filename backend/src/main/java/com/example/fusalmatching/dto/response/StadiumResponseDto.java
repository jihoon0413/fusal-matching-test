package com.example.fusalmatching.dto.response;

import com.example.fusalmatching.domain.Manager;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StadiumResponseDto {
    private Long id;
    private String stadiumName;
    private String address;
    private String tel;
    private String time;
    private String cost;
    private int fieldCount;
    private int evaluationCount;
    private int gpa;

}
