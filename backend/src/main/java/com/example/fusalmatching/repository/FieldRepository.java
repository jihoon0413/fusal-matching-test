package com.example.fusalmatching.repository;

import com.example.fusalmatching.domain.Field;
import com.example.fusalmatching.domain.Stadium;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Time;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface FieldRepository extends JpaRepository<Field, Long> {
    List<Field> findAllByStartTimeAndMatchingDate (Time time, Date date);
}
