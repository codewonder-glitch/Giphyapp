package com.visa.spring.mySpringBootApp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity


@Table(name = "Gif")
public class Gif {

	@Id
	@GeneratedValue
	@Column(name = "gif_id")
	private Integer gifID;

	@Column(name = "gif_name")
	private String gifName;

	@Column(name = "gif_url")
	private String gifUrl;

	@Column(name = "gif_category")
	private String gifCategory;

	public Integer getGifID() {
		return gifID;
	}

	public void setGifID(Integer gifID) {
		this.gifID = gifID;
	}

	public String getGifName() {
		return gifName;
	}

	public void setGifName(String gifName) {
		this.gifName = gifName;
	}

	public String getGifUrl() {
		return gifUrl;
	}

	public void setGifUrl(String gifUrl) {
		this.gifUrl = gifUrl;
	}

	public String getGifCategory() {
		return gifCategory;
	}

	public void setGifCategory(String gifCategory) {
		this.gifCategory = gifCategory;
	}

	public Gif(Integer gifID, String gifName, String gifUrl, String gifCategory) {
		super();
		this.gifID = gifID;
		this.gifName = gifName;
		this.gifUrl = gifUrl;
		this.gifCategory = gifCategory;
	}
	
	
	public Gif() {
		
	}

}
