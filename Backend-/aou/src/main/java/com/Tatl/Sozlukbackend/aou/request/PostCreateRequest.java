package com.Tatl.Sozlukbackend.aou.request;

import lombok.Data;

@Data
public class PostCreateRequest {
    String text;
    String title;
    Long userId;
}
