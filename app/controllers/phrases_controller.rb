class PhrasesController < ApplicationController

  def index
    @phrase = Phrase.first
    render json: @phrase
  end
end
