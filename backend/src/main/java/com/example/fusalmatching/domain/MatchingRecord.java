package com.example.fusalmatching.domain;

import com.fasterxml.jackson.databind.deser.DataFormatReaders;
import lombok.Getter;
import lombok.ToString;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;

@ToString
@Getter
@Entity
public class MatchingRecord {
    private String team_id1; //TODO 관게설정필요
    private String team_id2; //TODO 관게설정필요
    private String stadium_id; //TODO 관게설정필요
    private String field_id; //TODO 관게설정필요

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

    private MatchingRecord(String team_id1, String team_id2, String stadium_id, String field_id) {
        this.team_id1 = team_id1;
        this.team_id2 = team_id2;
        this.stadium_id = stadium_id;
        this.field_id = field_id;
    }

    public static MatchingRecord of(String team_id1, String team_id2, String stadium_id, String field_id) {
        return new MatchingRecord(team_id1, team_id2, stadium_id, field_id);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MatchingRecord that = (MatchingRecord) o;
        return confirm == that.confirm && allRental == that.allRental && t1evalt2 == that.t1evalt2 && t2evalt1 == that.t2evalt1 && t1evalsta == that.t1evalsta && t2evalsta == that.t2evalsta && Objects.equals(team_id1, that.team_id1) && Objects.equals(team_id2, that.team_id2) && Objects.equals(stadium_id, that.stadium_id) && Objects.equals(field_id, that.field_id) && Objects.equals(matchingDate, that.matchingDate) && Objects.equals(startTime, that.startTime) && Objects.equals(endTime, that.endTime) && Objects.equals(confirmDate, that.confirmDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(team_id1, team_id2, stadium_id, field_id, matchingDate, startTime, endTime, confirmDate, confirm, allRental, t1evalt2, t2evalt1, t1evalsta, t2evalsta);
    }
}
