package com.Tatl.Sozlukbackend.aou.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "userId")
@Data
public class Post {
    @Id
    Long id;
    Long userId;
    String title;
    @Lob
    @Column(columnDefinition = "text")
    String text;

}
