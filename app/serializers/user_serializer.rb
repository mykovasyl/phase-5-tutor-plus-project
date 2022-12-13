class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :type
end
