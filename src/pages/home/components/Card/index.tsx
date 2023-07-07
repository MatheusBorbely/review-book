import { Rating } from "@/interfaces/Rating";
import { CardContainer, CardHeader, CardContent } from "./styles";
import Image from "next/image";
import Stars from "@/pages/components/Stars";
import Avatar from "@/pages/components/Avatar";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { Book } from "@/interfaces/Book";
import { User } from "@/interfaces/User";
import { LoadingCard } from "../LoadingCard";
import dayjs from "dayjs";



export function Card({id, rate, description, created_at: createdAt, user_id: userId, book_id: bookId}: Rating) {
  const {data: book, isLoading: isLoadingBook} = useQuery<Book>(['book', bookId],async () => {
    const response = await api.get(`/books`,{
      params:{
        bookId
      }
    });
    return response.data;
  })
  const {data: user, isLoading: isLoadingUser} = useQuery<User>(['user', userId],async () => {
    const response = await api.get(`/users`,{
      params:{
        userId
      }
    });
    return response.data;
  })

  if (isLoadingUser || isLoadingBook || !book || !user) return <LoadingCard />

  const dataReferencia = dayjs(createdAt);
  const DateNow = dayjs();  
  const diffInDays = DateNow.diff(dataReferencia, 'days');

  return (
    <CardContainer>
      <CardHeader>
        
        <Avatar src={user.avatar_url} alt={`Avatar ${user.name}`} />
        <div>
          <h4>{user.name}</h4>
          <span>Ontem</span>
        </div>
        <Stars rating={rate} />
      </CardHeader>
      <CardContent>
        <Image src={book.cover_url} alt={`Capa do livro ${book.name}`} width={108} height={152} quality={100}/>
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
