class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :category, :description
  has_many :employees, serializer: EmployeeEventSerializer
  has_many :comments
end
