package com.cos.book.domain;

import org.springframework.data.jpa.repository.JpaRepository;

//@Repository를 적어야 스프링 IoC에 빈으로 등록이되는데...!!
//JpaRepository를 extends하면 생략가능해서빈으로 자동 등록이됨
//JpaRepository는 CRUD 함수를 들고있다.
public interface BookRepository extends JpaRepository<Book, Long>{

}
