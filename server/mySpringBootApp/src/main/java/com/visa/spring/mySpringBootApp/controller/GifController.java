package com.visa.spring.mySpringBootApp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.visa.spring.mySpringBootApp.exception.ResourceNotFoundException;
import com.visa.spring.mySpringBootApp.model.Gif;
import com.visa.spring.mySpringBootApp.repository.GifRepository;

@RestController
@RequestMapping("/giphy/v1")
public class GifController {

	@Autowired
	private GifRepository gifRepository;

	@GetMapping("/gifs")
	public List<Gif> getAllGifs() {

		return this.gifRepository.findAll();

	}

	@PostMapping("/gifs")
	public Gif createGif(@Valid @RequestBody Gif gif) {
		System.out.println("Gif:" + gif.toString());
		return this.gifRepository.save(gif);
	}

	@PutMapping("/gifs/{id}")
	public ResponseEntity<Gif> updateGif(@PathVariable(value = "id") Integer gifId, @Valid @RequestBody Gif updatedGif)
			throws ResourceNotFoundException {
		Gif gif = gifRepository.findById(gifId)
				.orElseThrow(() -> new ResourceNotFoundException("Gif not found for this id :: " + gifId));

		if (updatedGif.getGifName() != null)
			gif.setGifName(updatedGif.getGifName());
		if (updatedGif.getGifCategory() != null)
			gif.setGifCategory(updatedGif.getGifCategory());
		if (updatedGif.getGifUrl() != null)
			gif.setGifUrl(updatedGif.getGifUrl());

		final Gif modifiedGif = gifRepository.save(gif);

		return ResponseEntity.ok(modifiedGif);

	}

	@DeleteMapping("/gifs/{id}")
	public Map<String, Boolean> deleteGif(@PathVariable(value = "id") Integer gifId) throws ResourceNotFoundException {

		gifRepository.deleteById(gifId);
		Map<String, Boolean> response = new HashMap<>();

		response.put("Gif Deleted", Boolean.TRUE);

		return response;

	}
}