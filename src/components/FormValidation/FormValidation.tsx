import { useEffect, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import StarRating from '../StarRating/StarRating';
import Stars from '../Stars/Stars';
import { CommentsList, Formulario, StarsContainter, Title } from './styles';
import { CartProductListType } from '../../types/types';

type CommentListType = {
  id: string;
  email: string;
  comment: string;
  rating: number
};

type FormValidationType = {
  paramId: string | undefined,
  currentProduct: CartProductListType | null | undefined
};

export default function FormValidation({ paramId, currentProduct }: FormValidationType) {
  const [commentList, setCommentList] = useState<CommentListType[]>([]);
  const [email, setEmail] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [checkForm, setCheckForm] = useState(false);

  useEffect(() => {
    const storedComments = localStorage.getItem(paramId || '');
    if (storedComments) setCommentList(JSON.parse(storedComments));
  }, [paramId]);

  function checkFormImput() {
    const inputs = [
      isEmail(email),
      rating >= 1];

    return inputs.every((input) => input === true);
  }

  const handleCLick = (event: React.FormEvent<HTMLFormElement>) => {
    setCheckForm(false);
    const { id } = currentProduct!;
    event.preventDefault();
    if (!checkFormImput()) {
      setCheckForm(true);
      return;
    }
    const submitComment = { id, email, comment, rating };
    const localStoreComment = [...commentList, submitComment];
    localStorage.setItem(id, JSON.stringify(localStoreComment));
    setCommentList(localStoreComment);
    setRating(0);
    setEmail('');
    setComment('');
  };

  return (
    <>
      <Formulario
        onSubmit={ handleCLick }
      >
        <h3>Avaliações</h3>
        <StarsContainter>
          <label htmlFor="Email">Email</label>
          <input
            data-testid="product-detail-email"
            id="Email"
            type="text"
            value={ email }
            onChange={ (
              event: React.ChangeEvent<HTMLInputElement>,
            ) => setEmail(event.target.value) }
          />
          <StarRating
            rating={ rating }
            onSetRating={ (stars: number) => setRating(stars) }
          />
        </StarsContainter>
        <textarea
          data-testid="product-detail-evaluation"
          name="comment"
          id="comment"
          value={ comment }
          onChange={ (
            event:React.ChangeEvent<HTMLTextAreaElement>,
          ) => setComment(event.target.value) }
          cols={ 60 }
          rows={ 10 }
        />
        { checkForm && <p data-testid="error-msg">Campos inválidos</p>}
        <button data-testid="submit-review-btn">Send</button>
      </Formulario>
      <CommentsList>
        {commentList.map((data, index) => (
          <div key={ index }>
            <Title>
              <h1 data-testid="review-card-email">{data.email}</h1>
              <p
                data-testid="review-card-rating"
              >
                {Array.from({ length: data.rating }, (_, indexA) => (
                  <Stars key={ indexA } />
                ))}
              </p>
            </Title>
            <p data-testid="review-card-evaluation">{data.comment}</p>
          </div>
        ))}
      </CommentsList>
    </>
  );
}
