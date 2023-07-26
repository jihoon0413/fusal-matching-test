package com.example.fusalmatching.service;

import com.example.fusalmatching.domain.Field;
import com.example.fusalmatching.domain.Stadium;
import com.example.fusalmatching.domain.StadiumReview;
import com.example.fusalmatching.dto.response.FieldResponseDto;
import com.example.fusalmatching.dto.response.StadiumResponseDto;
import com.example.fusalmatching.dto.response.StadiumReviewResponseDto;
import com.example.fusalmatching.dto.response.TeamReviewResponseDto;
import com.example.fusalmatching.repository.FieldRepository;
import com.example.fusalmatching.repository.StadiumRepository;
import com.example.fusalmatching.repository.StadiumReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Time;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class StadiumService {

    private final StadiumRepository stadiumRepository;
    private final FieldRepository fieldRepository;
    private final StadiumReviewRepository stadiumReviewRepository;

    @Transactional
    public List<StadiumResponseDto> getStadiumList() {
        return stadiumRepository.findAll()
                .stream().map(it -> entityToDto(it))
                .collect(Collectors.toList());
    }

    @Transactional
    public List<StadiumReviewResponseDto> getReviewList(Long id) {

        List<StadiumReviewResponseDto> collect = stadiumReviewRepository.findAllByStadiumId(id)
                .stream().map(it -> entityToDtoReview(it))
                .collect(Collectors.toList());

        return collect;


    }

    private StadiumReviewResponseDto entityToDtoReview(StadiumReview stadiumReview) {
        var dto = new StadiumReviewResponseDto();
        dto.setGpa(stadiumReview.getGpa());
        dto.setReview(stadiumReview.getReview());
        return dto;
    }




//    public void createFieldAuto(Long id) {
//
//        Optional<Stadium> stadium1 = stadiumRepository.findById(id);
//
//        Stadium stadium = stadium1.get();
//        int fieldCount1 = stadium.getFieldCount();
//        String cost = stadium.getCost();
//
//        SimpleDateFormat time1 = new SimpleDateFormat("HH:mm");
//        SimpleDateFormat date1 = new SimpleDateFormat("yy-MM-dd");
//        Time startTime = Time.valueOf(time1.format("18:00"));
//        Time endTime = Time.valueOf(time1.format("20:00"));
//
//
//
//
//        Field field = Field.of(stadium, java.sql.Date.valueOf("2022-04-09"), startTime, endTime, "50,000");
//
//        fieldRepository.save(field);
//
//    }




    private StadiumResponseDto entityToDto(Stadium stadium) {
        var dto = new StadiumResponseDto();
        dto.setId(stadium.getId());
        dto.setStadiumName(stadium.getStadiumName());
        dto.setAddress(stadium.getAddress());
        dto.setTel(stadium.getTel());
        dto.setTime(stadium.getTime());
        dto.setCost(stadium.getCost());
        dto.setFieldCount(stadium.getFieldCount());
        dto.setEvaluationCount(stadium.getEvaluationCount());
        dto.setGpa(stadium.getGpa());
        return dto;
    }


    public List<FieldResponseDto> getFieldList(Long id, Date date, Time time) {

        List<FieldResponseDto> collect = fieldRepository.findAllByStadiumId(id)
                        .stream().map(it -> compareDate(it, date, time))
                        .collect(Collectors.toList());

        return collect;

    }

    public FieldResponseDto compareDate(Field field, Date date, Time time) {

        if(Objects.equals(String.valueOf(date), String.valueOf(field.getMatchingDate())) && Objects.equals(String.valueOf(time), String.valueOf(field.getStartTime()))) {
            var dto =new FieldResponseDto();
            dto.setId(field.getId());
            dto.setMatchingDate(String.valueOf(field.getMatchingDate()));
            dto.setStartTime(String.valueOf(field.getStartTime()));
            dto.setEndTime(String.valueOf(field.getEndTime()));
            return dto;
        }
        return null;
    }
}
