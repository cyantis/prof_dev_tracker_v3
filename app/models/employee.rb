class Employee < ApplicationRecord
  belongs_to :location

  has_many :employee_events
  has_many :events, through: :employee_events
  has_many :comments

  before_save :downcase_email
  before_create :generate_confirmation_instructions

  validates :username, :email, :name, presence: true
  validates :username, :email, uniqueness: true, case_sensitive: false
  validates_format_of :email, with: /@/

  has_secure_password

  def manager?
   manager_id.nil?
  end

 def employee?
   !manager?
 end
end
