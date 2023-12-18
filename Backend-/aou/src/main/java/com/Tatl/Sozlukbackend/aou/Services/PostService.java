package com.Tatl.Sozlukbackend.aou.Services;

import com.Tatl.Sozlukbackend.aou.entities.Post;
import com.Tatl.Sozlukbackend.aou.entities.User;
import com.Tatl.Sozlukbackend.aou.repository.PostRepo;
import com.Tatl.Sozlukbackend.aou.request.PostCreateRequest;
import com.Tatl.Sozlukbackend.aou.request.PostUpdateRequest;
import com.Tatl.Sozlukbackend.aou.response.PostResponse;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostService {
   private PostRepo postRepository;
   private UserService userService;

    public PostService(UserService userService,PostRepo postRepository) {
        this.userService = userService;
        this.postRepository = postRepository;

    }



    public List<PostResponse> getAllPost(Optional<Long> userId) {
        List <Post> list;
        if(userId.isPresent())
             postRepository.findByUserId(userId.get());
             list= postRepository.findAll();

            return list.stream().map(p-> new PostResponse(p)).collect(Collectors.toList());

    }


    public Post getOnePost(Long postId) {
        return postRepository.findById(postId).orElse(null);
    }

    public Post createOnePost(PostCreateRequest newpostCreateRequest) {

       User user= userService.getOneUser(newpostCreateRequest.getUserId());
       if(user==null)
           return null;
       Post toSave=new Post();
        toSave.setText(newpostCreateRequest.getText());
        toSave.setTitle(newpostCreateRequest.getTitle());
        toSave.setUser(user);

        return postRepository.save(toSave);
    }

    public Post updateOnePostId(Long postId, PostUpdateRequest updatePostRequest) {
        Optional<Post> post=postRepository.findById(postId);
        if (post.isPresent()){
            Post toUpdate=post.get();
            toUpdate.setText(updatePostRequest.getText());
            toUpdate.setTitle(updatePostRequest.getTitle());
            postRepository.save(toUpdate);
            return toUpdate;

        }
        return null;
    }

    public void deleteOnePostId(Long postId) {
        postRepository.deleteById(postId);
    }
}
