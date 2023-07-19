package hs.example.jmeter.themoviedb.api.v1.movie;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class MovieController {

    @GetMapping("/movie")
    public Map print() {
//    public String print() {
        ClassPathResource resource = new ClassPathResource("data/data.json");
        // log.info(resource.getFile()); // 파일 객체
        log.info(resource.getFilename()); // 파일 이름
        // log.info(resource.getInputStream()); // InputStream 객체
        log.info(resource.getPath()); // 파일 경로
        // log.info(resource.getURL()); // URL 객체
        // log.info(resource.getURI()); // URI 객체

        List<String> content = null;
        Map<String,Object> map = null;
        String s = null;
        byte[] bytes = null;
        try {
            Path path = Paths.get(resource.getURI());
            bytes = Files.readAllBytes(path);
            s= new String(bytes);

//            content = Files.readAllLines(path);
//            content.forEach(System.out::println);
            ObjectMapper om = new ObjectMapper();
            map = om.readValue(new String(bytes), Map.class);
        } catch (Exception e) {
            log.error("Error" , e);
        }
        log.info(new String(bytes));
        return map;
//        return s;
    }
}
