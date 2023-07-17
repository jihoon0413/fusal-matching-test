package com.example.fusalmatching.domain;


import lombok.Getter;
import lombok.ToString;


import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;

@ToString
@Getter
@Table(indexes ={
        @Index(columnList = "team_id1"),
        @Index(columnList = "team_id2"),
        @Index(columnList = "stadium_id"),
        @Index(columnList = "field_id")
})
@Entity
public class MatchingRecord {
    @ManyToOne
    private Team team1; //TODO 관게설정필요

    @ManyToOne
    private Team team2; //TODO 관게설정필요

    @ManyToOne
    private Stadium stadium;

    @OneToOne
    private Field field;

    private LocalDate matchingDate;
    private LocalTime startTime;
    private LocalTime endTime;
    private LocalTime confirmDate;

    
    private boolean confirm;
    private boolean allRental;
    private boolean t1evalt2;
    private boolean t2evalt1;
    private boolean t1evalsta;
    private boolean t2evalsta;






    protected MatchingRecord() {}

    private MatchingRecord(Team team1, Team team2, Stadium stadium, Field field) {
        this.team1 = team1;
        this.team2 = team2;
        this.stadium = stadium;
        this.field =field;

    }

    public static MatchingRecord of(Team team1, Team team2, Stadium stadium, Field field) {
        return new MatchingRecord(team1, team2, stadium, field);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MatchingRecord that = (MatchingRecord) o;
        return confirm == that.confirm && allRental == that.allRental && t1evalt2 == that.t1evalt2 && t2evalt1 == that.t2evalt1 && t1evalsta == that.t1evalsta && t2evalsta == that.t2evalsta && Objects.equals(team1, that.team1) && Objects.equals(team2, that.team2) && Objects.equals(stadium, that.stadium) && Objects.equals(field, that.field) && Objects.equals(matchingDate, that.matchingDate) && Objects.equals(startTime, that.startTime) && Objects.equals(endTime, that.endTime) && Objects.equals(confirmDate, that.confirmDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(team1, team2, stadium, field, matchingDate, startTime, endTime, confirmDate, confirm, allRental, t1evalt2, t2evalt1, t1evalsta, t2evalsta);
    }
}
