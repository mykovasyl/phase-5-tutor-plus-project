class Assignment < ApplicationRecord
  belongs_to :student
  belongs_to :tutor

  has_many_attached :files

  validates :name, :subject, presence: true

  # def file_urls
  #   if files.attached?
  #     files.each do |file|
  #       Rails.application.routes.url_helpers.url_for(file)
  #     end
  #   end
  # end
end
