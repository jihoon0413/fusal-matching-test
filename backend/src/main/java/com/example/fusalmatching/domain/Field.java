package com.example.fusalmatching.domain;

import lombok.Getter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;

@ToString
@Getter
@Table(indexes = {
        @Index(columnList = "matchingDate"),
        @Index(columnList = "startTime")
})
@Entity
public class Field {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Stadium stadium;

    private LocalDate matchingDate;
    private LocalTime startTime;
    private LocalTime endTime;
    private String cost;





    protected Field() {}

    private Field(Stadium stadium, LocalDate matchingDate, LocalTime startTime, LocalTime endTime, String cost) {
        this.stadium = stadium;
        this.matchingDate = matchingDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.cost = cost;
    }

    public static Field of(Stadium stadium, LocalDate matchingDate, LocalTime startTime, LocalTime endTime, String cost){
        return new Field(stadium, matchingDate, startTime, endTime, cost);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Field field = (Field) o;
        return Objects.equals(id, field.id) && Objects.equals(stadium, field.stadium) && Objects.equals(matchingDate, field.matchingDate) && Objects.equals(startTime, field.startTime) && Objects.equals(endTime, field.endTime) && Objects.equals(cost, field.cost);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, stadium, matchingDate, startTime, endTime, cost);
    }
}
