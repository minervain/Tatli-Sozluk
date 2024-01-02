package com.Tatl.Sozlukbackend.aou.request;


import lombok.Data;

@Data
public class CommentCreateRequest {


    Long id;

    Long userId;
    Long postId;
    String text;

}
