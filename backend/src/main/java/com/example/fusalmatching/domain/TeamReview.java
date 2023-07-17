package com.example.fusalmatching.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Objects;

@ToString
@Getter
@Table(indexes = @Index(columnList = "team_id"))
@Entity
public class TeamReview extends AuditingFields {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private String team_id; //TODO 관계설정
    @Setter
    @Column(nullable = false)
    private int manner;

    @Setter
    @Column(nullable = false)
    private int skill;

    protected TeamReview() {};

    private TeamReview(String team_id, int manner, int skill) {
        this.team_id = team_id;
        this.manner =manner;
        this.skill = skill;
    }

    public static TeamReview of(String team_id, int manner, int skill) {
        return new TeamReview(team_id, manner, skill);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TeamReview that = (TeamReview) o;
        return manner == that.manner && skill == that.skill && Objects.equals(id, that.id) && Objects.equals(team_id, that.team_id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, team_id, manner, skill);
    }
}
