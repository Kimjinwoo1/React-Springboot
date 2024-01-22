package com.cos.book.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cos.book.domain.Book;
import com.cos.book.domain.BookRepository;

import lombok.RequiredArgsConstructor;

//서비스가 등록되면 기능을 정의할 수 있고 , 트랜잭션을 관리 할 수 있다.

@RequiredArgsConstructor
@Service
public class BookService {

	//여기서하는 함수주된 임무 => ex)송금() => 레파지토리에 여러개의함수실행 ->잘되면 커밋 안되면 롤백
	private final BookRepository bookRepository;
	
	@Transactional//저장하기를 했으면 트렌젝션을 발동시켜야된다 spring으로된거. 서비스함수가 종료될때 commit할지 rollback할지 트랜잭션 관리하겠다.
	public Book 저장하기(Book book) {
		return bookRepository.save(book);
	}
	
	@Transactional(readOnly=true)//JPA에 readOnly가있으면 변경감지 내부기능 활성화 X,update시의 정합성을 유지해준다. insert의 유령데이터현상(팬텀현상)못막는다.
	public Book 한건가져오기(Long id) {
		return bookRepository.findById(id)
				.orElseThrow(()->new IllegalArgumentException("id를 확인해주세요"));
	}
	
	@Transactional(readOnly=true)
	public List<Book>모두가져오기(){
		return bookRepository.findAll();
	}
	
	@Transactional
	public Book 수정하기(Long id,Book book) {
		//수정하기는 더티체팅을한다 update치기
		//이렇게하면 영속화가 된다. 지금 실제 DB에있는 Entitiy를 가지고게되면 book 오브젝트가 영속화가 된다.
		//영속화가 되었다는건 spring내부 공간에 따로 가지고 있는거다. 영속화가 되면 
		//영속화가 되어있는 데이터를 영속성 컨텍스트에 보관이된다.
		Book bookEntity = bookRepository.findById(id)
				.orElseThrow(()->new IllegalArgumentException("id를 확인해주세요"));
		bookEntity.setTitle(book.getTitle());
		bookEntity.setAuthor(book.getAuthor());
		return bookEntity;
	}//함수 종료 => 트랜젝션 종료 => 영속화 되어있는 데이터를 DB로갱신(flush)=>이때 commit이되는데 이걸 ==>더티체킹이라고한다.
	
	@Transactional
	public String 삭제하기(Long id) {
		bookRepository.deleteById(id); //내부적으로 오류가 터지면 익셉션을 타니깐 신경쓰지말고
		return "ok";
	}
}
