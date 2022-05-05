package  com.term.terminal.models;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name = "Quiz")
public class Quiz {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "quiz_id", updatable = false )
    private Integer id;

	@Size(max=500, message = "The description can't be longer than 500 characters.")
	@Column(name = "description" )
	private String description;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	// @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL)
	// private List<Question> questions;

	public String getDescription() {
		return description;
	}

	public void setDescription(String name) {
		this.description = name;
	}

	// public List<Question> getQuestions() {
	// 	return questions;
	// }

	// public void setQuestions(List<Question> questions) {
	// 	this.questions = questions;
	// }
	
}
