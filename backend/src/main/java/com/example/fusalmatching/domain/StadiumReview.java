package com.example.fusalmatching.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Objects;

@ToString
@Getter
@Table(indexes = @Index(columnList = "stadium_id"))
@Entity
public class StadiumReview extends AuditingFields{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private String stadium_id; //TODO 관계설정필요
    @Setter private int gpa;
    @Setter private String review;

    protected StadiumReview() {};

    private StadiumReview(String stadium_id, int gpa, String review) {
        this.stadium_id = stadium_id;
        this.gpa = gpa;
        this.review = review;
    }

    public static StadiumReview of(String stadium_id, int gpa, String review) {
        return new StadiumReview(stadium_id, gpa, review);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StadiumReview that = (StadiumReview) o;
        return gpa == that.gpa && Objects.equals(id, that.id) && Objects.equals(stadium_id, that.stadium_id) && Objects.equals(review, that.review);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, stadium_id, gpa, review);
    }
}
