package com.example.fusalmatching.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

@Getter
@ToString
@Table(indexes = {
        @Index(columnList = "teamName")
})
@Entity
public class Team extends AuditingFields {

    @Id
    @Setter
    private String id;

    @Setter private String password;

    @Setter private String teamName;

    @OneToMany(mappedBy = "team")
    private final Set<TeamReview> teamReviews = new LinkedHashSet<>();

    @OneToMany(mappedBy = "team1")
    private final Set<MatchingRecord> matchingRecordsFrom1 = new LinkedHashSet<>();

    @OneToMany(mappedBy = "team2")
    private final Set<MatchingRecord> matchingRecordsFrom2 = new LinkedHashSet<>();

    @Setter private int manner;

    @Setter private int skill;

    @Setter private int evaluationCount;






    protected Team() {};

    private Team(String teamId, String teamName, String password) {
        this.id = teamId;
        this.teamName = teamName;
        this.password = password;
    }

    public static Team of(String teamId, String teamName, String password) {
        return new Team(teamId, teamName, password);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Team team = (Team) o;
        return manner == team.manner && skill == team.skill && evaluationCount == team.evaluationCount && Objects.equals(id, team.id) && Objects.equals(password, team.password) && Objects.equals(teamName, team.teamName) && Objects.equals(teamReviews, team.teamReviews) && Objects.equals(matchingRecordsFrom1, team.matchingRecordsFrom1) && Objects.equals(matchingRecordsFrom2, team.matchingRecordsFrom2);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, password, teamName, teamReviews, matchingRecordsFrom1, matchingRecordsFrom2, manner, skill, evaluationCount);
    }
}
