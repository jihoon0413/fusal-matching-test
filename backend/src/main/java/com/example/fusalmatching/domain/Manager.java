package com.example.fusalmatching.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.Table;
import java.util.Objects;

@ToString
@Getter
@Table(indexes = {
        @Index(columnList = "stadium_id"),
        @Index(columnList = "managerId")
})
@Entity
public class Manager extends AuditingFields{

    @Id
    @Setter
    private String id;

    @Setter private String password;

    private String stadium_id; //TODO 관계설정필요

    public Manager() {}

    protected Manager(String id, String password) {
        this.id = id;
        this.password = password;
    }

    public static Manager of(String id, String password) {
        return new Manager(id, password);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Manager manager = (Manager) o;
        return Objects.equals(id, manager.id) && Objects.equals(password, manager.password) && Objects.equals(stadium_id, manager.stadium_id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, password, stadium_id);
    }
}
