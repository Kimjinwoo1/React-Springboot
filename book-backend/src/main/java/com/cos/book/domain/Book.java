package com.cos.book.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity // 서버실행시에 테이블이 h2에 생성됨.
public class Book {
	@Id //PK를 해당 변수로 하겠다는뜻
	@GeneratedValue(strategy=GenerationType.IDENTITY)//해당 데이터베이스 번호증가 전략을 따라가겠다.
	private Long id;
	
	private String title;
	private String author;
	
	//함수를 아래에 넣는다.
}
