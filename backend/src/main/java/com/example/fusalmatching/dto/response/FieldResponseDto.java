package com.example.fusalmatching.dto.response;

import com.example.fusalmatching.domain.Stadium;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FieldResponseDto {

    private Long id;
    private Stadium stadium;
    private String matchingDate;
    private String startTime;
    private String endTime;


}
