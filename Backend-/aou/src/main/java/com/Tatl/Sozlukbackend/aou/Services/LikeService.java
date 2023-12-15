package com.Tatl.Sozlukbackend.aou.Services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.Tatl.Sozlukbackend.aou.entities.Like;
import com.Tatl.Sozlukbackend.aou.entities.Post;
import com.Tatl.Sozlukbackend.aou.entities.User;
import com.Tatl.Sozlukbackend.aou.repository.LikeRepo;
import com.Tatl.Sozlukbackend.aou.request.LikeCreateRequest;
import com.Tatl.Sozlukbackend.aou.response.LikeResponse;
import org.springframework.stereotype.Service;


@Service
public class LikeService {

    private LikeRepo likeRepository;
    private UserService userService;
    private PostService postService;

    public LikeService(LikeRepo likeRepository, UserService userService,
                       PostService postService) {
        this.likeRepository = likeRepository;
        this.userService = userService;
        this.postService = postService;
    }

    public List<LikeResponse> getAllLikesWithParam(Optional<Long> userId, Optional<Long> postId) {
        List<Like> list;
        if(userId.isPresent() && postId.isPresent()) {
            list = likeRepository.findByUserIdAndPostId(userId.get(), postId.get());
        }else if(userId.isPresent()) {
            list = likeRepository.findByUserId(userId.get());
        }else if(postId.isPresent()) {
            list = likeRepository.findByPostId(postId.get());
        }else
            list = likeRepository.findAll();
        return list.stream().map(like -> new LikeResponse(like)).collect(Collectors.toList());
    }

    public Like getOneLikeById(Long LikeId) {
        return likeRepository.findById(LikeId).orElse(null);
    }

    public Like createOneLike(LikeCreateRequest request) {
        User user = userService.getOneUser(request.getUserId());
        Post post = postService.getOnePost(request.getPostId());
        if(user != null && post != null) {
            Like likeToSave = new Like();
            likeToSave.setId(request.getId());
            likeToSave.setPost(post);
            likeToSave.setUser(user);
            return likeRepository.save(likeToSave);
        }else
            return null;
    }

    public void deleteOneLikeById(Long likeId) {
        likeRepository.deleteById(likeId);
    }


}