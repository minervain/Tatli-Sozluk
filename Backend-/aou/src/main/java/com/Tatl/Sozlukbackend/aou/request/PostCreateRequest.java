package com.Tatl.Sozlukbackend.aou.request;

import lombok.Data;

@Data
public class PostCreateRequest {
    Long id;
    String text;
    String title;
    Long userId;
}
