package com.example.fusalmatching.dto;

import com.example.fusalmatching.domain.Team;

public record TeamDto(
        String id,
        String password,
        String teamName,
        String captainName,
        String tel,
        String email,
        String imgUrl,
        int manner,
        int skill
) {

    public static TeamDto of(String id, String password, String teamName, String captainName, String tel, String email, String imgUrl, int manner, int skill) {
        return new TeamDto(id, password,teamName,captainName,tel,email,imgUrl,manner,skill);
    }

    public static TeamDto from(Team team) {
        return new
    }

    public Team toEntity() {
        return Team.of(id,teamName,password,captainName,tel,email);
    }

}
