package com.example.fusalmatching.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Objects;

@ToString
@Getter
@Table(indexes = @Index(columnList = "id"))
@Entity
public class Stadium extends AuditingFields{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    @Setter private String tel;
    @Setter private String time;
    @Setter private int fieldCount;
    @Setter private int evaluationCount;
    @Setter private int gpa;
    //photo

    protected Stadium() {}

    private Stadium(String tel, String time, int fieldCount) {
        this.tel = tel;
        this.time = time;
        this.fieldCount =fieldCount;
    }

    public static Stadium of(String tel, String time, int fieldCount) {
        return new Stadium(tel, time, fieldCount);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Stadium stadium = (Stadium) o;
        return fieldCount == stadium.fieldCount && evaluationCount == stadium.evaluationCount && gpa == stadium.gpa && Objects.equals(id, stadium.id) && Objects.equals(tel, stadium.tel) && Objects.equals(time, stadium.time);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, tel, time, fieldCount, evaluationCount, gpa);
    }
}
