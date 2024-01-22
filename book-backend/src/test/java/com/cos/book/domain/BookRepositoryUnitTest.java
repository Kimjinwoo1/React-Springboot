package com.cos.book.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.transaction.annotation.Transactional;

// 단위테스트 (DB관련된 Bean이 Ioc에 등록되면 됨)

@Transactional
@AutoConfigureTestDatabase(replace = Replace.ANY)//가짜 DB로 테스트하는것(단위테스트). 만약 Replace.NONE 실제 DB로 테스트(통합테스트)
@DataJpaTest // 아래 private에 mock로 띄울필요가 없는이유는 Repository들을 다 Ioc 등록해두니깐
public class BookRepositoryUnitTest {

	@Autowired
	private BookRepository bookRepository;
}
