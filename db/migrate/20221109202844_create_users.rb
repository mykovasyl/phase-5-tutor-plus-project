class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :name
      t.attachment :avatar
      t.string :subjects
      t.string :headline
      t.string :grade
      t.string :type
      t.timestamps
    end
  end
end
