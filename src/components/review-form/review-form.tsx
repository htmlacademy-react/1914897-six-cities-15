import { FC, useState, Fragment, ChangeEvent, SyntheticEvent } from 'react';
import { REVIEW_MAX_LENGTH, REVIEW_MIN_LENGTH, Rating } from '../../const';


export const ReviewForm: FC = () => {
  const [formData, setFormData] = useState({
    rating: 0,
    review: '',
  });

  const checkValidForm = (): boolean => !(
    !formData.rating || formData.review.length > REVIEW_MAX_LENGTH || formData.review.length < REVIEW_MIN_LENGTH
  );

  const inputChangeHandler = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;


    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formSubmitHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();
  };


  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={formSubmitHandler}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {
          Rating.map(({value, label}) => (
            <Fragment key={value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={value}
                id={`${value}-stars`}
                type="radio"
                onChange={ inputChangeHandler }
              />
              <label
                htmlFor={`${value}-stars`}
                className="reviews__rating-label form__rating-label"
                title={label}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        onChange={ inputChangeHandler }
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">{REVIEW_MIN_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!checkValidForm()}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
