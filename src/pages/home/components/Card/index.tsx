import { RatingHomeFeed } from "@/interfaces/Rating/RatingHomeFeed";
import { CardContainer, CardHeader, CardContent } from "./styles";
import Image from "next/image";
import Stars from "@/pages/components/Stars";
import Avatar from "@/pages/components/Avatar";
import dayjs from "dayjs";



export function Card({rate, description, createdAt, book, user}: RatingHomeFeed) {


  return (
    <CardContainer>
      <CardHeader>
        <Avatar src={user.avatar} alt={`Avatar ${user.name}`} />
        <div>
          <h4>{user.name}</h4>
          <span>Ontem</span>
        </div>
        <Stars rating={rate} />
      </CardHeader>
      <CardContent>
        <Image src={book.cover} alt={`Capa do livro ${book.name}`} width={108} height={152} quality={100}/>
        <div>
          <header>
            <h2>
              {book.name}
            </h2>
            <span>
              {book.author}
            </span>
          </header>
          <p>
            {description}
          </p>
        </div>
      </CardContent>
    </CardContainer>
  )
}
