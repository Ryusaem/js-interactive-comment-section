NORMAL
div: comment-section

    header: comment-section__header
        div: comment-section__user
            img: comment-section__avatar
            div: comment-section__user-info
                h2: comment-section__user-name
                span: comment-section__time

    div: comment-section__comments
        article: comment
            div: comment_ratings
                button: comment__like-btn
                span: comment__like-score
                button: comment__dislike-btn
            div: comment_actions
                button: comment__reply-btn

YOU COMMENT
div: comment-section

    header: comment-section__header
        div: comment-section__user
            img: comment-section__avatar
            div: comment-section__user-info
                h2: comment-section__user-name
                div: comment-section__user-status
                    span: comment-section__user-status--you
                span: comment-section__time

    div: comment-section__comments
        article: comment
            span: comment__destinataire
            p: comment__content

        div: comment_ratings
            button: comment__like-btn
            span: comment__like-score
            button: comment__dislike-btn
        div: comment_actions
            button: comment__delete-btn
            button: comment__edit-btn



        article: comment
            header: comment__header
                div: comment__user
                    img: comment__avatar
                    div: comment__user-info
                        h3: comment__user-name
                        span: comment__time
                div: comment__actions
                    button: comment__reply-btn
                    button: comment__edit-btn
                    button: comment__delete-btn
            p: comment__content
        form: comment-form
            textarea: comment-form__textarea
            button: comment-form__submit-btn
    div: modal modal--hidden
        div: modal__content
            h3: modal__title
            p: modal__description
            div: modal__actions
                button: modal__cancel-btn
                button: modal__delete-btn
