n_div=70
previous_randomN=1

function add_divs() {
	for (let i=0; i<n_div; i++) {

		$div=document.createElement("div")
		$div.classList.add("div")
		$clone_div=document.importNode($div, true)

		$body=document.querySelector("#body")
		$body.appendChild($clone_div)
	}
}

add_divs()

function check_randoms() {
	switch (previous_randomN-random_number) {
		case 8:
			random_number=Math.round((Math.random())*(n_div-1))+1
			return check_randoms(random_number)
			break
		case 9:
			random_number=Math.round((Math.random())*(n_div-1))+1
			return check_randoms(random_number)
			break
		case 10:
			random_number=Math.round((Math.random())*(n_div-1))+1
			return check_randoms(random_number)
			break
		case -9:
			random_number=Math.round((Math.random())*(n_div-1))+1
			return check_randoms(random_number)
			break
		case -1:
			random_number=Math.round((Math.random())*(n_div-1))+1
			return check_randoms(random_number)
			break
		case 1:
			random_number=Math.round((Math.random())*(n_div-1))+1
			return check_randoms(random_number)
			break
		default:
			return random_number
	}
}

function add_video(body, video) {

	try {
		$body.firstElementChild.removeChild($body.firstElementChild.firstElementChild)
	} catch {

	}

	$body.classList.add("after_body")

	$video=document.createElement("video")

	$video.setAttribute("autoplay", "")

	$video.setAttribute("name", "media")

	$source=document.createElement("source")

	$source.setAttribute("src", `${video}.mp4`)

	$source.setAttribute("type", "video/mp4")

	$video.appendChild($source)

	$body.firstElementChild.classList.remove("div")

	$body.firstElementChild.classList.add("after_div")

	$video.style.setProperty("width", "inherit")

	$source.style.setProperty("width", "inherit")

	$body.firstElementChild.appendChild($video)

	if (video==="video2") {
		$video.setAttribute("loop", "")
	}

}

function add_input() {
	random_number=Math.round((Math.random())*(n_div-1))+1

	random_number=check_randoms(random_number)

	previous_randomN=random_number
	$body=document.querySelector("#body")
	$div=$body.children[random_number]
	$div.classList.add("nice_div")

	if ($div.children[1]===undefined) {

		$input=document.createElement("div")
		$input.insertAdjacentText("afterbegin", "Ganas si me apretas")
		$input.classList.add("input")

		$div.appendChild($input)

		onButtom = () => {
			$div.removeChild($input)
			$div.classList.remove("nice_div")
			$div.removeEventListener("mouseenter", onButtom)
			add_input()

		}

		$div.addEventListener("mouseenter", onButtom)

		clickButtom = () => {
					$div.removeChild($div.firstElementChild)
					$div.classList.remove("nice_div")
					$div.removeEventListener("click", clickButtom)
					for (let i=0; i<n_div; i++) {
						$body.removeChild($body.firstElementChild)
					}
					speechSynthesis.speak(new SpeechSynthesisUtterance("Felicidades ganaste el siguiente premio"))

					setTimeout(() => {

						add_video($body, "video1")
					
					}, 1500)

					setTimeout( () => {

							add_video($body, "video2")
					
					},4000)


			}
				$input.addEventListener("click", clickButtom)

	} else {
		add_input()
	}
}

add_input()
