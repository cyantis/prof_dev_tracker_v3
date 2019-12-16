class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :category, :description, :shared, :updated_at
  has_many :employees, serializer: EmployeeEventSerializer
  has_many :comments
end
